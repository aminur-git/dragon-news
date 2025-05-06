import { useLoaderData } from "react-router";
import NewsCard from "../Components/Layout-Component/NewsCard";

const CategoryNews = () => {

    const {data: news } = useLoaderData();
    // console.log(news)

    return (
        <div className="space-y-3">
            <h1 className="font-semibold ">Dragon News Home</h1> 
            <div className="space-y-4">
                {
                    news.map((singleNews, idx)=> <NewsCard key={idx} news={singleNews}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;