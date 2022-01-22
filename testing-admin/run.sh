#!/bin/bash

# desc: 该脚本用于一键构建testing-admin代码，并自动提交到远程git仓库

# 初始化上下文。有参数的
initContext(){
	# （vite打包后的）源代码目录
	source_dir=dist
	# git_url=git@git.ngmm365.com:page_packages/testing-admin-dist.git
  git_url=http://git.ngmm365.com/page_packages/testing-admin-dist.git
	dest=".deploy/testing-admin-dist"
}

# 初始化git目录，pull最新代码
init(){
	echo +++init start;
	
	if [ ! -d $dest ]; then
	  	git clone $git_url $dest --depth=1
	fi
	# 记录现在的目录位置，最后要回来的
	cur=`pwd`

  # 进入git目录
  cd $dest

	# 当前的git地址不对（即clone失败）则退出
	if [ "$(git config --get remote.origin.url)" != $git_url ]; then
		exit 1
	fi
  	
  	# git checkout .
  	git add .
  	git stash

  	# reset为线上最新版本，要先pull一下再reset。
  	git pull origin master
  	git reset --hard origin/master
		
	# 然后再pull一下
	git pull origin master

	# 回到原来的目录
	cd $cur
	echo ---init end;
}

# 重置dist目录
resetDist(){
	echo +++resetDist start

	rsync -a --delete --exclude='.git' $dest/. ./dist

	echo ---resetDist end
}

# 构建
build(){
	echo +++build start
	yarn build
	echo ---build end
}

# 检查是否成功
checkBuild(){	
	if [[ ! -f $source_dir/index.html || ! -d $source_dir/assets ]]; then
		echo error
	else
		echo ok
	fi
}

# 复制代码到$dest目录
cpCode(){
	echo +++cpCode start
	# 复制代码，所有文件包含隐藏文件
	rsync -r --exclude='.git' $source_dir/. $dest

	echo ---cpCode end
}

# 提交到远程git仓库
commit(){
	echo +++commit start
	# 记录现在的目录位置，最后要回来的
	cur=`pwd`

	# 进入git目录
	cd $dest

    if [[ $image_name != '' ]];then
        echo 'commit config'
        git config user.email "jinyingbin@nicomama.com"
        git config user.name "ops"
    fi

	# 提交的字符串
	commit_str="commited in `date '+%Y-%m-%d_%H:%M:%S'`"
	
	git add .
	git commit -am "${commit_str}"
	git push origin master

	# 回到原来的目录
	cd $cur
	echo ---commit end
}

# 显示帮助信息
help(){
	echo ./run.sh	 			"#"一键构建和提交到远程仓库testing-admin-dist
  echo ./run.sh test			"#"test
	echo ----帮助信息--------
	echo ./run.sh help			"#"帮助

}

# 测试用的
test(){
	echo "a test empty task"
}

# build_in_docker(){
#     # 在 jenkins 上配置脚本：
#     # rm -rf .deploy
#     # ./run.sh beta -d
#     echo "$(tput setaf 5)`date +"%Y-%m-%d %H:%M:%S"` $(tput setaf 4)+++build_in_docker start$(tput sgr0)"

#     # 相关变量
#     if [[ $3 = '-c' ]];then
#     CLEAR=1
#     else
#     CLEAR=0
#     fi
#     image_name="webmall_build_${type}"
#     container_name="webmall_build_${type}"

#     # 环境变量写入
#     # 测试clear变量变化
#     # 测试已经有容器下，运行是否最新
#     echo "${type}
# ${CLEAR}" > docker/env

#     # 执行
#     if [[ $(docker images $image_name -q) = '' ]];then
#         # 如果没有镜像，构建一个镜像
#         docker build -t $image_name .
#         # 创建并运行容器
#         docker run --name $container_name -v $(pwd):/opt/node-web/ $image_name
#     else
#         # 终止容器的运行
#         docker stop $container_name
#         # 运行容器
#         docker start -a $container_name
#     fi

#     echo "$(tput setaf 5)`date +"%Y-%m-%d %H:%M:%S"` $(tput setaf 4)---build_in_docker end$(tput sgr0)"
# }

# 入口
if [[ $# -lt 1 ]]; then
    echo ===\>准备构建
    initContext
    init
    build
    echo 嘿嘿嘿

    # 代码构建成功才继续。
    checkRes=$(checkBuild)
    if [ $checkRes == "ok" ];then
	      # 将最新打包的dist目录，复制到的.deploy/目录。
	      cpCode
        commit
	      echo "$(tput setaf 2)===\>task complete$(tput sgr0)"
    else
	      echo "$(tput setaf 1)xxx\>build error,task abort$(tput sgr0)"
    fi
elif [ $1 ]; then
	# 参数不是包类型的，当中函数处理
	echo ===\>准备执行${1}函数
	initContext beta

	func=$1
	$func
	echo ===\>task complete
fi