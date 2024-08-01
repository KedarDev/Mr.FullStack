import React, { useEffect, useContext, useState } from "react";

import { AppContext } from "../../context/applicationContext";
import LoadingIndicator from "../../components/LoadingIndicator";

import { getOthersFeedsApi } from "../../utils/ApiUtils";

import MyProfile from "../../components/MyProfile";

import AddFeed from "../../components/AddFeed";

import InfiniteScroll from "react-infinite-scroll-component";

import FeedCard from "../../components/FeedCard";

const Dashboard = () => {
  const appContext = useContext(AppContext);
  const token = appContext.getSession();
  const userData = appContext.getUserData();

  const [feedsData, setFeedsData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const getOthersFeeds = async (loadPageNumber) => {
    if (loadPageNumber === 0) {
      setFeedsData([]);
    }

    const apiResponse = await getOthersFeedsApi(token, loadPageNumber);

    console.log(apiResponse);

    if (apiResponse.status === 1) {
      let feedsDataNew = [];
      if (loadPageNumber !== 0) {
        feedsDataNew = feedsData;
      }
      feedsDataNew.push(...apiResponse.payLoad.content);
      setFeedsData(feedsDataNew);

      setPageNumber(loadPageNumber + 1);

      if (loadPageNumber + 1 === apiResponse.payLoad.totalPages) {
        setHasMore(false);
      } else {
        setHasMore(true);
      }
    }
  };

  useEffect(() => {
    document.title = "Dashboard | Portfolio APP";
    getOthersFeeds(0);
  }, []);

  if (!userData) {
    return <LoadingIndicator />;
  }

  return (
    <main className=" desktop-s:max-w-[90%] desktop:max-w-[90%] black-gradient grid grid-cols-1 lg:grid-cols-2 gap-6 my-12 
     md:mx-12 w-2xl container px-2 mx-auto">
      {/* {#MyProfile Component} */}
      <MyProfile />
      <article>
        {/* {#AddFeed Component} */}
        <AddFeed />
        {/* {#FeedCard Component} */}
        <InfiniteScroll
          dataLength={feedsData.length}
          next={() => getOthersFeeds(pageNumber)}
          hasMore={hasMore}
          endMessage={
            <p className="text-center text-[#808080]">
              <b>Scroll to the top.</b>
            </p>
          }
          refreshFunction={() => getOthersFeeds(0)}
          pullDownToRefresh
          pullDownToRefreshThreshold={50}
          pullDownToRefreshContent={
            <h3 className="text-center">&#808080; Pull down to refresh</h3>
          }
          releaseToRefreshContent={
            <h3 className="text-center">&#808080; Release to refresh</h3>
          }
        >
          <div className="mt-3">
            {feedsData.map(
              ({ feedId, picture, content, createdOn, feedMetaData, user }) => (
                <FeedCard
                  key={feedId}
                  feedId={feedId}
                  // picture={picture}
                  content={content}
                  createdOn={createdOn}
                  username={user.username}
                  firstName={user.firstName}
                  lastName={user.lastName}
                  profilePicture={user.picture}
                  feedMetaData={feedMetaData}
                />
              )
            )}
          </div>
        </InfiniteScroll>
      </article>
    </main>
  );
};

export default Dashboard;