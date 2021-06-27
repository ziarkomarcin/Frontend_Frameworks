import axios from 'axios';
import {FC, useState, useEffect} from 'react';
import styled from 'styled-components';
import {Colors} from "../../../styled_helpers/Colors";
import Posts from './Posts/Posts';

const Wrapper = styled.div`
    width:100%;
    height: 800px;
    margin-top:20px;
`;

const Pag_Butt = styled.div`
    display: flex;
    justify-content: center;
    button{
        padding: .5rem;
        width:auto;
        height:auto;
        background-color: ${Colors.best_red};
        color: ${Colors.best_dark};
        border-radius: .5rem;
        margin-bottom: 1rem;
        outline:none;
        border: 1px solid black;
    }
    .next_prev{
        width:auto;
    }
`;
const Pagination_Block: FC = () => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(5);

    useEffect(() =>{
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setPosts(res.data);
            setLoading(false);
        }
        fetchPosts();
    }, []);
    
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    const maxPage = posts.length / postsPerPage;

    const goPrevious = () => {
        if (currentPage > 1) {
            changePage(currentPage - 1);
        }
    }

    const goNext = () => {
        if (currentPage < maxPage) {
            changePage(currentPage + 1);
        }
    }

    const changePage = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    }

    return ( 
        <Wrapper>      
           <Posts posts={currentPosts} loading={loading}/>

           <Pag_Butt>
                <button onClick={goPrevious} className='next_prev'>PREVIOUS</button>
                
                <button onClick={() => changePage(1)}>
                    01
                </button>

                <button className='mx-4'>...</button>
                

                {currentPage - 1 > 0 &&
                    <button onClick={() => changePage(currentPage - 1)} className='mr-2'>
                        {String(currentPage - 1).padStart(2, '0')}
                    </button>
                }

                <button className='text-gray-800'>{String(currentPage).padStart(2, '0')}</button>

                {currentPage + 1 <= maxPage &&
                    <button onClick={() => changePage(currentPage + 1)} className='ml-2'>
                        {String(currentPage + 1).padStart(2, '0')}
                    </button>
                }

                <button className='mx-4'>...</button>

                <button onClick={() => changePage(maxPage)}>
                    {String(maxPage).padStart(2, '0')}
                </button>

                <button onClick={goNext} className='next_prev'>NEXT</button>
                
            </Pag_Butt>
        </Wrapper>
    );
};
export default Pagination_Block;




 
