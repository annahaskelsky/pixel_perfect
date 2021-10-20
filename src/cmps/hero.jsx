import rectangle from '../assets/img/Rectangle.png'

export const Hero = () => {
    return (<section className="hero flex space-between">
        <div className="hero-title">Find the best <span>talent</span></div>
        <div className="flex column space-between">
            <div className="img-wrapper"><img src={rectangle} /></div>
            <h4 className="hero-txt">Finding the right people and building high performing teams can be hard. Most companies aren’t tapping into the abundance of global talent. We’re about to change that.</h4>

        </div>
    </section>)
}