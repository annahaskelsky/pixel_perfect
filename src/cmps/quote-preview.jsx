import apostrophes from '../assets/img/apostrophes.png'

export const QuotePreview = ({ quote }) => {
    return (<div className="quote-preview">
        <div className="img-wrapper">
            <img src={apostrophes} />
        </div>
        <p className="quote-txt">{quote.txt}</p>
        <h5 className="quote-name">{quote.writtenBy.fullName}</h5>
        <h6 className="quote-job">{quote.writtenBy.jobTitle}</h6>

        <div className="user-img-wrapper">
            <img src={quote.writtenBy.imgUrl} />
        </div>
    </div>)
}