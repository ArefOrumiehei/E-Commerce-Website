import PropTypes from 'prop-types'

//Icons
import { IconStar, IconStarFilled, IconStarHalfFilled } from "@tabler/icons-react";

//Styles
import '../scss/ProductRating.scss'

const ProductRating = ({ rating, numReviews }) => {

    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<IconStarFilled key={i} />);
            } else if (i - 0.5 <= rating) {
                stars.push(<IconStarHalfFilled key={i} />);
            } else {
                stars.push(<IconStar key={i} />);
            }
        }
        return stars;
    };

    return (
        <div className="productRating">
            <div className="ratingStars">{renderStars()}</div>
            <div className="numReviews">({numReviews})</div>
        </div>
    );
};

ProductRating.propTypes = {
    rating : PropTypes.number,
    numReviews : PropTypes.number,
}

export default ProductRating;
