<template>
  <div>
    <h1>Game page</h1>
    {{unityContext}}
    <Unity :unity="unityContext" width="800px" height="600px" />

<!--    <canvas id="canvas" style="width: 100%; height: 100%"></canvas>-->
  </div>
</template>

<script>
import UnityWebgl from 'unity-webgl'
// var Unity = new UnityWebgl({
//   loaderUrl: 'Build/unity.loader.js',
//   dataUrl: "Build/unity.data",
//   frameworkUrl: "Build/unity.framework.js",
//   codeUrl: "Build/unity.wasm",
//   streamingAssetsUrl: "StreamingAssets",
//   companyName: "DefaultCompany",
//   productName: "Unity",
//   productVersion: "0.1",
// })

// Unity.create(document.querySelector('#canvas'))

// import UnityWebgl from '../../dist/UnityWebgl.esm'
const Unity = new UnityWebgl({
//   loaderUrl: 'https://static-huariot-com.oss-cn-hangzhou.aliyuncs.com/unity/test1/Build/OUT_BIM.loader.js',
//   dataUrl: "https://static-huariot-com.oss-cn-hangzhou.aliyuncs.com/unity/test1/Build/OUT_BIM.data",
//   frameworkUrl: "https://static-huariot-com.oss-cn-hangzhou.aliyuncs.com/unity/test1/Build/OUT_BIM.framework.js",
//   codeUrl: "https://static-huariot-com.oss-cn-hangzhou.aliyuncs.com/unity/test1/Build/OUT_BIM.wasm",
//   streamingAssetsUrl: "StreamingAssets",
//   companyName: "DefaultCompany",

  loaderUrl: '@/Build/Games.loader.js',
  dataUrl: "@/Build/Games.data",
  frameworkUrl: "@/Build/Games.framework.js",
  codeUrl: "@/Build/Games.wasm"
})
console.log(Unity)

export default {
  name: 'Game',
  components: {
    Unity: UnityWebgl.vueComponent
  },
  data() {
    return {
      unityContext: Unity
    }
  },
  mounted() {
    console.log(this.unityContext)
  }
}
</script>


<style scoped>

</style>