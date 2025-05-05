import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { MdOutlineFileDownload } from 'react-icons/md';
import { useParams } from 'react-router';

const DetailsCard = () => {
    const { id } = useParams();
    const [app, setApp] = useState(null);

    // initial reviews view
    const [reviews, setReviews] = useState([]);

    const [review, setReview] = useState("");
  const [rating, setRating] = useState(1);
    

    useEffect(() => {
        fetch('/categories.json')
            .then(res => res.json())
            .then(data => {
                const found = data.find(item => item.id == id); 
                setApp(found);
                setReviews(found.reviews || []); 
            });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (review.trim()) {
          const newReview = {
            user: "Anonymous",
            rating,
            comment: review,
          };
    
          setReviews([newReview, ...reviews]); // Add new review to the top
          setReview(""); // Reset form
          setRating(1);
        }
      };
    

    if (!app) return <div className="text-center text-lg font-semibold">Loading...</div>;

    return (
        <div className="container mx-auto p-8 bg-gradient-to-r from-blue-100 via-gray-50 to-gray-200 shadow-lg rounded-lg mb-28">
            <h1 className="text-3xl font-extrabold text-gray-800 mb-6">App Details</h1>

            <div className="mb-8">
                <div className="flex items-center space-x-6">
                    <img src={app.thumbnail} className="w-40 h-40 object-cover rounded-lg shadow-md" />
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-900">{app.name}</h2>
                        <p className="text-sm text-gray-600">{app.developer}</p>
                    </div>
                </div>
            </div>

            <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Description</h3>
                <p className="text-gray-700">{app.description}</p>
            </div>

            <div className="mb-8 grid grid-cols-2 gap-6">
                <div>
                    <p className="text-sm font-medium text-gray-600">Category</p>
                    <p className="text-lg text-gray-900">{app.category}</p>
                </div>
                <div>
                    <p className="text-sm font-medium text-gray-600">Rating</p>
                    <p className="text-lg text-yellow-500 flex gap-2 items-center">{app.rating} <FaStar className="text-amber-400" size={18}></FaStar></p>
                </div>
                <div>
                    <p className="text-sm font-medium text-gray-600">Downloads</p>
                    <p className="text-lg text-gray-900 flex gap-2 items-center"><MdOutlineFileDownload className="text-amber-400" size={24} />{app.downloads}</p>
                </div>
            </div>

            <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Features</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    {app.features && app.features.map((feature, index) => (
                        <li key={index} className="text-lg">{feature}</li>
                    ))}
                </ul>
            </div>

            <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Reviews</h3>
                <div className="space-y-6">
                    {reviews.map((review, index) => (
                        <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-sm border-1 border-amber-300">
                            <p className="font-medium text-gray-800">{review.user}</p>
                            <p className="text-sm text-yellow-500 flex gap-2 items-center">{review.rating} <FaStar className="text-amber-400" size={12}></FaStar></p>
                            <p className="text-gray-700">{review.comment}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Review Submission Section */}
            <div className="mb-8">
      <h3 className="text-xl font-semibold text-gray-900 mb-3">Submit Your Review</h3>
      <form onSubmit={handleSubmit}>
        <textarea
          className="w-full p-4 mb-4 border rounded-lg shadow-sm"
          placeholder="Write your review..."
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
        <div className="flex items-center gap-4">
          <input
            type="number"
            min="1"
            max="5"
            className="w-20 p-2 border rounded-lg"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit Review
          </button>
        </div>
      </form>
    </div>
            <div className="flex justify-center">
                <button className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    Install
                </button>
            </div>
        </div>
    );
};

export default DetailsCard;
