import kady from '../assets/img/kady.png'
import aiysha from '../assets/img/aiysha.png'
import arthur from '../assets/img/arthur.png'
import { QuotePreview } from './quote-preview'

export const Quotes = () => {
    return (
        <section className="quotes full">
            <div className="quotes-title">
                Delivering real results for top companies. Some of our <span className="blue-words">success stories.</span>
            </div>
            <div className="quote-list flex space-between">
                {quotes.map(quote => <QuotePreview key={quote.id} quote={quote} />)}
            </div>

        </section>)
}

const quotes = [
    {
        id: 101,
        txt: '“The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”',
        writtenBy: {
            fullName: 'Kady Baker',
            jobTitle: 'Product Manager at Bookmark',
            imgUrl: kady
        }
    },
    {
        id: 102,
        txt: '“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”',
        writtenBy: {
            fullName: 'Aiysha Reese',
            jobTitle: 'Founder of Manage',
            imgUrl: aiysha
        }
    },
    {
        id: 103,
        txt: '“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”',
        writtenBy: {
            fullName: 'Arthur Clarke',
            jobTitle: 'Co-founder of MyPhysio',
            imgUrl: arthur
        }
    }
]