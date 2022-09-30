import React from 'react';
import EarnedRow from '../../components/EarnedRow';
import RecommendRow from '../../components/RecommendRow';
import GraphsRow from '../../components/GraphsRow';

function Dashboard() {
  // const [posts, setPosts] = useState([]);
  // const [searchTxt, setSearchTxt] = useState('');

  // useEffect(() => {
  //   fetch('https://api.github.com/users/hacktivist123/repos')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);

  //       if (searchTxt) {
  //         return setPosts(
  //           data.filter((ii) => ii.name.toLowerCase().includes(searchTxt.toLowerCase())),
  //         );
  //       }
  //       return setPosts(data);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // }, [searchTxt]);

  return (
    <div className="flex flex-col justify-center items-center px-[34px] py-[27px]">
      <GraphsRow />
      <EarnedRow />
      <RecommendRow />
    </div>
  );
}

export default Dashboard;
