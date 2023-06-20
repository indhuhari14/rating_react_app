function RatingCircle() {
    return(
        <div>
            {
                [...Array(5)].map((circle, index) => (
                    <div key={index} className="circle"></div>
                ))
            }
        </div>
    );
}
export default RatingCircle;