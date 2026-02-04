import '../style/promo.css'

const promos = [
    "EGGS, MEAT AND FISH",
    "NEUPASS",
    "AYURVEDA",
    "BUY MORE SAVE MORE",
    "DEALS OF THE WEEK",
    "COMBO STORE"
]

function PromoSection() {
    return (
        <div className="promo-container">
            {promos.map((promo, index) => (
                <div key={index} className="promo-item">{promo}</div>
            ))}
        </div>
    )
}
export default PromoSection;