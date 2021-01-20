import React, {useState, useEffect} from 'react';
import axios from "axios";

const App = () => {


    //1. 데이터 담을공간
    const [articles, setArticles] = useState({})
    const [loading, setLoading] = useState(true)

    //3. 네트워킹

    const getData = async () => {
        return (
            await axios.get('http://www.findyourapi.com/api/posts/')
                // .then(res =>console.log(res.data))
                .then(res => {
                    setArticles(res.data)
                    setLoading(false)
                })
                .catch(err => console.log(err))
        )
    }




    //2, 자동실행 함수
    useEffect(() => {
        getData()
    }, {})


    return (
        <>
            {loading ?
                <div>
                    <h1>
                        loading ...
                    </h1>
                </div>
                : (

                    <div>
                        {articles.map(data =>
                        <>
                            <h1>Article author : {data.author_name}</h1>
                            <h2>Article title : {data.title}</h2>
                            <h3>content of the article : {data.content}</h3>
                            <h4>Article writing date : {data.published_at}</h4>
                        </>
                        )}
                    </div>
                )
            }
                </>
                )



};
export default App;
