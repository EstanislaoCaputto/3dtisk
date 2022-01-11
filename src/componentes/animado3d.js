import * as THREE from 'three'
import { useEffect } from 'react'
import {STLLoader} from 'three/examples/jsm/loaders/STLLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import filePath from "./STL/Onix_Circle_Full.stl"

export default function Animado(){
    useEffect(()=>{
        let scene, camera, renderer, object;
        function init(){
            scene = new THREE.Scene();
            scene.background = new THREE.Color('green')


            camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000)
            camera.position.z = 10
            renderer = new THREE.WebGLRenderer();
            renderer.setSize(window.innerWidth, window.innerHeight)
            let cuerpo = document.getElementById('memo')
            cuerpo.appendChild(renderer.domElement)
            scene.add(object)

            let control = new OrbitControls ( camera, renderer.domElement)

            let light = new THREE.DirectionalLight('white')
            light.position.set(5,0,10)
            scene.add(light)

            let light1 = new THREE.DirectionalLight('white')
            light.position.set(-5,-10,0)
            scene.add(light1)


            animate()
            
        }
        function animate(){
            requestAnimationFrame(animate)
            renderer.render(scene, camera)
        }
        
        let loader = new STLLoader();
        loader.load(filePath, (model)=>{
            object = new THREE.Mesh(
                model,
                new THREE.MeshLambertMaterial({color:'blue'})
            );
            object.scale.set(0.01, 0.01, 0.01)
            object.position.set(0,0,0)
            // object.rotation.x = -Math.PI/2
            init()

        })
       
    })
    return (
        <div id='memo'>

        </div>
    )
}
