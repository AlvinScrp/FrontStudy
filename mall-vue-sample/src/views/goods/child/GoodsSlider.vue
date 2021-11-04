<template>
    <div>
        <slider
            :items="banners"
            :customStyle="customStyle"
            :autoScroll="false"></slider>
    </div>
</template>

<script>
import Slider from 'components/Slider.vue'

export default {
    components: {
        Slider
    },
    props: {
        banners: {
            type: Array,
            required: true
        }
    },
    data () {
        return {
            customStyle: {
                indicatorColorActive: '#f7615b',
                indicatorColor: '#000',
                size: 8
            }
        }
    },
    created () {},
    methods: {}
}
</script>
<style scoped>
</style>
