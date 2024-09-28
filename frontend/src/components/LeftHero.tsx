import { Heading } from "./Heading"
import { Link } from "react-router-dom"
import { HeroButton } from "./HeroButton"
export const LefHero = () => {
    return <div className="h-screen flex   justify-center">
        <div className="flex flex-col items-center">
            <Heading/>
            <br />
            <div className="mt-4">
                    <Link to={'/signup'}>
                        <HeroButton text={'Signup'} />
                </Link>
                <Link to={'/signup'}> <HeroButton text={'Signin'} />
                </Link>
            </div>
        </div>
         
        
        
    </div>
}