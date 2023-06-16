import * as THREE from 'three'
import Experiences from '../Experiences.js'

export default class Nave
{
    constructor()
    {
        this.experiences = new Experiences()
        this.scene = this.experiences.scene
        this.resources = this.experiences.resources
        this.time = this.experiences.time
        this.debug = this.experiences.debug

        // Debug
        if(this.debug.active)
        {
            this.debugFolder = this.debug.ui.addFolder('nave')
        }

        // Resource
        this.resource = this.resources.items.naveModel

        this.setModel()
        
    }

    setModel()
    {
        this.model = this.resource.scene
        this.model.scale.set(0.1, 0.1, 0.1)
        this.scene.add(this.model)

        this.model.traverse((child) =>
        {
            if(child instanceof THREE.Mesh)
            {
                child.castShadow = true
            }
        })
    }
}