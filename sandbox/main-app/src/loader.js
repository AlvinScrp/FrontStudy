import importHTML from 'import-html-entry';
import { createSandboxContainer } from './ts/sandbox/index';
import { getWrapperId, getContainer } from './ts/utils';
import getAddOns from './ts/addons';
import { css } from './ts/sandbox/index';

let version = '2.2.2'
let globalNameCount = 0

export async function loadApp(appConfig) {
  const { appName, htmlEntry, container } = appConfig
  const res = await importHTML(htmlEntry)
  console.log('res', res)
  const { template, execScripts, assetPublicPath, getExternalScripts } = res
  const appInstanceId = `${appName}_${++globalNameCount}`;
  const sandbox = true
  const appContent = getDefaultTplWrapper(appInstanceId, sandbox)(template);
  const initialAppWrapperElement = createElement(appContent,false,true,appInstanceId)
  console.log('initialAppWrapperElement', initialAppWrapperElement)

  const initialContainer = container
  const render = getRender()

  render(initialAppWrapperElement, initialContainer)

  const initialAppWrapperGetter = () => { return initialAppWrapperElement };


  const scopedCSS = true
  const useLooseSandbox = false
  const excludeAssetFilter = null
  const globalContext = window
  const speedySandBox = false
  let sandboxContainer = createSandboxContainer(
    appInstanceId,
    initialAppWrapperGetter,
    scopedCSS,
    useLooseSandbox,
    excludeAssetFilter,
    globalContext,
    speedySandBox
  )

  global = sandboxContainer.instance.proxy;

  const {
    beforeUnmount = [],
    afterUnmount = [],
    afterMount = [],
    beforeMount = [],
    beforeLoad = [],
  } = getAddOns(global, assetPublicPath)

  await execHooksChain(beforeLoad, appConfig, global)

  await execScripts(global)
  const app = global[appName]
  const { bootstrap, mount, unmount, update } = app
  return () => {
    return {
      name: appName,
      bootstrap,

      mount: [
        sandboxContainer.mount,
        async () => execHooksChain(beforeMount, app, global),
        async (props) => mount({ ...props, container: initialAppWrapperElement }),
        async () => execHooksChain(afterMount, app, global),
      ],
      unmount: [
        async () => execHooksChain(beforeUnmount, app, global),
        async (props) => unmount(props),
        sandboxContainer.unmount,
        async () => execHooksChain(afterUnmount, app, global),
      ],
      update
    }
  }
}

/**
 *
 * @param {*} appContent
 * @param {*} strictStyleIsolation  use shadow dom or not
 * @param {*} scopedCSS  css and appElement  add property data-qiankun=[appInstanceId] property
 * @param {*} appInstanceId
 * @returns
 */
function createElement(appContent,strictStyleIsolation,scopedCSS,appInstanceId) {
  const containerElement = document.createElement('div');
  containerElement.innerHTML = appContent;
  // appContent always wrapped with a singular div
  const appElement = containerElement.firstChild;
  if(scopedCSS){
    const attr = appElement.getAttribute(css.QiankunCSSRewriteAttr);
    if(!attr){
      appElement.setAttribute(css.QiankunCSSRewriteAttr,appInstanceId)
    }
    console.log('createElement',appElement.innerHTML)
    //通过htmlentry插入的style
    const styleNodes = appElement.querySelectorAll('style') || [];
    styleNodes.forEach((stylesheetElement) => {
      css.process(appElement, stylesheetElement, appInstanceId);
    });
  }
  return appElement
}

export const qiankunHeadTagName = 'qiankun-head';

export function getDefaultTplWrapper(name, sandboxOpts) {
  return (tpl) => {
    let tplWithSimulatedHead;

    if (tpl.indexOf('<head>') !== -1) {
      // We need to mock a head placeholder as native head element will be erased by browser in micro app
      tplWithSimulatedHead = tpl
        .replace('<head>', `<${qiankunHeadTagName}>`)
        .replace('</head>', `</${qiankunHeadTagName}>`);
    } else {
      // Some template might not be a standard html document, thus we need to add a simulated head tag for them
      tplWithSimulatedHead = `<${qiankunHeadTagName}></${qiankunHeadTagName}>${tpl}`;
    }

    return `<div id="${getWrapperId(
      name,
    )}" data-name="${name}" data-version="${version}" data-sandbox-cfg=${JSON.stringify(
      sandboxOpts,
    )}>${tplWithSimulatedHead}</div>`;
  };
}

function getRender() {
  return (element, container) => {
    const containerElement = getContainer(container);
    while (containerElement.firstChild) {
      containerElement.removeChild(containerElement.firstChild);
    }
    if (element) {
      containerElement.appendChild(element);
    }
  };
}

function execHooksChain(hooks, global = window) {
  // 检查钩子数组是否有内容
  if (hooks.length) {
    // 使用 reduce 串联执行所有钩子函数
    return hooks.reduce((chain, hook) => {
      return chain.then(() => hook(app, global));
    }, Promise.resolve());
  }

  // 如果没有钩子函数，返回已解决的 Promise
  return Promise.resolve();
}

