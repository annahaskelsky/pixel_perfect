import { Hero } from "../cmps/hero"
import { Quotes } from "../cmps/quotes"

export const HomePage = () => {
    return <div className="full">
        <Hero />
        <Quotes />
    </div>
}