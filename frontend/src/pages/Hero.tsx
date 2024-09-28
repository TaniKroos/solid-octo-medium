import { Appbar } from "../components/Appbar"
import { LefHero } from "../components/LeftHero"
import { RightHero } from "../components/RightHero"


export const Hero = () => {
    return <div>
        <Appbar />
            <div className="grid grid-cols-1 lg:grid-cols-2 bg-customColor">
                    
                    <div>   
                        <LefHero />
                    </div>

                    <div className="invisible lg:visible">
                        <RightHero />
                    </div>
            
     </div>
    </div>
    
}