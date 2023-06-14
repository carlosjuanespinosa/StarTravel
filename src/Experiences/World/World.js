import Experiences from '../Experiences.js'
import Environment from './Environment.js'

import Nave from './Nave.js'

export default class World
{
    constructor()
    {
        this.experiences = new Experiences()
        this.scene = this.experiences.scene
        this.resources = this.experiences.resources

        // Wait for resources
        this.resources.on('ready', () =>
        {
            // Setup
           
            this.nave = new Nave()
            this.environment = new Environment()
        })
    }

    
}