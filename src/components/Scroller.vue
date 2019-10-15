<template>
    <div class="wrapper" ref="wrapper">
        <slot></slot>
    </div>
</template>

<script>
import BScroller from  'better-scroll'
export default {
    name:'Scroller',
    props:{
        handleToScroller:{
            type:Function,
            default:function(){}
        },
        handleToTouchEnd:{
            type:Function,
            default:function(){}
        }
    },
    mounted() {
        var scroll = new BScroller(this.$refs.wrapper,{
            tap:true,
            probeType:1
        })
        this.scroll = scroll;
        scroll.on('scroll',(pos)=>{
            this.handleToScroller(pos)
        })
        scroll.on('touchEnd',(pos)=>{
            this.handleToTouchEnd(pos)
        })
    },
    methods:{
        toScrollTop(y){
            this.scroll.scrollTo(0,y);
        }
    }
}
</script>

<style lang="stylus" scoped>
.wrapper{height :100%}
</style>