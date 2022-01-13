import * as THREE from 'three'
import { useEffect } from 'react'
import {STLLoader} from 'three/examples/jsm/loaders/STLLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import filePath from "./STL/Onix_Circle_Full.stl"
import filePath2 from "./STL/avion.stl"
import filePath3 from "./STL/Bard.stl"

export function Animado(){
    useEffect(()=>{
        let scene, camera, renderer, object;
        function init(){
            scene = new THREE.Scene();
            scene.background = new THREE.Color('orange')
            
            camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
            camera.position.z = 12
            renderer = new THREE.WebGLRenderer();
            renderer.setSize(window.innerWidth/4 , window.innerHeight/2 )
            let cuerpo = document.getElementById('memo')
            cuerpo.appendChild(renderer.domElement)
            scene.add(object)

            // let control = new OrbitControls ( camera, renderer.domElement)

            let light = new THREE.DirectionalLight('white')
            light.position.set(5,0,10)
            scene.add(light)

            let light1 = new THREE.DirectionalLight('white')
            light.position.set(-5,0,-10)
            scene.add(light1)


            animate()
            
        }
        function animate(){
            requestAnimationFrame(animate)
            object.rotateX(0.001)
            object.rotateY(0)
            object.rotateZ(0.01)
            renderer.render(scene, camera)
        }
        
        let loader = new STLLoader();
        loader.load(filePath, (model)=>{
            object = new THREE.Mesh(
                model,
                new THREE.MeshLambertMaterial({color:'blue'})
            );
            object.scale.set(0.05, 0.05, 0.05)
            object.position.set(0,0,0)
            object.rotateX(-45)
            init()

        })
       
    })
    return (
        <div id='memo'>

        </div>
    )
}

export function Animado2(){
    useEffect(()=>{
        let scene, camera, renderer, object;
        function init(){
            scene = new THREE.Scene();
            scene.background = new THREE.Color('orange')
            
            camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
            camera.position.z = 10
            renderer = new THREE.WebGLRenderer();
            renderer.setSize(window.innerWidth/4 , window.innerHeight/2 )
            let cuerpo = document.getElementById('memo1')
            cuerpo.appendChild(renderer.domElement)
            scene.add(object)

            // let control = new OrbitControls ( camera, renderer.domElement)

            let light = new THREE.DirectionalLight('white')
            light.position.set(5,0,10)
            scene.add(light)

            let light1 = new THREE.DirectionalLight('white')
            light.position.set(-5,0,-10)
            scene.add(light1)


            animate()
            
        }
        function animate(){
            requestAnimationFrame(animate)
            object.rotateX(0.001)
            object.rotateY(0)
            object.rotateZ(0.01)
            renderer.render(scene, camera)
        }
        
        let loader = new STLLoader();
        loader.load(filePath2, (model)=>{
            object = new THREE.Mesh(
                model,
                new THREE.MeshLambertMaterial({color:'blue'})
            );
            object.scale.set(0.05, 0.05, 0.05)
            object.position.set(0,0,0)
            object.rotateX(-45)
            init()

        })
       
    })
    return (
        <div id='memo1'>

        </div>
    )
}
export function Animado3(){
    useEffect(()=>{
        let scene, camera, renderer, object;
        function init(){
            scene = new THREE.Scene();
            scene.background = new THREE.Color('orange')
            
            camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
            camera.position.z = 15
            renderer = new THREE.WebGLRenderer();
            renderer.setSize(window.innerWidth/4 , window.innerHeight/2 )
            let cuerpo = document.getElementById('memo2')
            cuerpo.appendChild(renderer.domElement)
            scene.add(object)

            // let control = new OrbitControls ( camera, renderer.domElement)

            let light = new THREE.DirectionalLight('white')
            light.position.set(20,10,15)
            scene.add(light)

            let light1 = new THREE.DirectionalLight('white')
            light.position.set(-5,0,-10)
            scene.add(light1)


            animate()
            
        }
        function animate(){
            requestAnimationFrame(animate)
            object.rotateX(0.001)
            object.rotateY(0)
            object.rotateZ(0.01)
            renderer.render(scene, camera)
        }
        
        let loader = new STLLoader();
        loader.load(filePath3, (model)=>{
            object = new THREE.Mesh(
                model,
                new THREE.MeshLambertMaterial({color:'blue'})
            );
            object.scale.set(0.15, 0.15, 0.15)
            object.position.set(0,-2,0)
            object.rotateX(-45)
            init()

        })
       
    })
    return (
        <div id='memo2'>

        </div>
    )
}