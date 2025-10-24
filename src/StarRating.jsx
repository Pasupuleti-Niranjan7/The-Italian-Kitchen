
let StarRating = ({rating}) => {
        let maxRating = 5;
        return (
                <>
                <div>
                       {[...Array(maxRating)].map((_, index) => {
                        const isFilled = index < rating;
                        return (
                          <span key={index}
                            className={`${
                              isFilled ? "text-amber-300" : "text-gray-300"
                            }`}
                          >
                            &#9733;
                          </span>
                        );
                       })} 
                </div>
                </>
        )
}

export default StarRating;