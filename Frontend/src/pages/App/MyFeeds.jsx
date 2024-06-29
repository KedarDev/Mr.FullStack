import React, { useEffect, useContext, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import MyProfile from "../../components/MyProfile";
import FeedCard from "../../components/FeedCard";
import { AppContext } from "../../context/applicationContext";
import LoadingIndicator from "../../components/LoadingIndicator";

import { getMyFeedsApi } from "../../utils/ApiUtils";

const MyFeeds = () => {
  const appContext = useContext(AppContext);
  const token = appContext.getSession();
  const userData = appContext.getUserData();

  const [feedsData, setFeedsData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    document.title = "My Feeds | Feed App";
    getMyFeeds(0);
  }, []);

  const getMyFeeds = async (loadPageNumber) => {
    if (loadPageNumber === 0) {
      setFeedsData([]);
    }

    const apiResponse = await getMyFeedsApi(token, loadPageNumber);

    if (apiResponse.status === 1) {
      let feedsDataNew = [];

      if (loadPageNumber !== 0) {
        feedsDataNew = feedsData;
      }

      feedsDataNew.push(...apiResponse.payLoad.content);

      setFeedsData(feedsDataNew);

      setPageNumber(loadPageNumber + 1);

      if (loadPageNumber === apiResponse.payLoad.totalPages) {
        setHasMore(false);
      } else {
        setHasMore(true);
      }
    }
  };

  if (!userData) {
    return <LoadingIndicator />;
  }

  return (
    <main className="  desktop-s:max-w-[90%] grid grid-cols-1 lg:grid-cols-2 gap-6 my-12  md:mx-12 w-2xl container px-2 mx-auto">
      {/* {#MyProfile Component} */}
      <MyProfile />
      <article>
        {/* {#FeedCard Component} */}
        <InfiniteScroll
          dataLength={feedsData.length}
          next={() => getMyFeeds(pageNumber)}
          hasMore={hasMore}
          endMessage={
            <p className="text-center">
              <b>Scroll to the top.</b>
            </p>
          }
          refreshFunction={() => getMyFeeds(0)}
          pullDownToRefresh
          pullDownToRefreshThreshold={50}
          pullDownToRefreshContent={
            <h3 className="text-center text-[#fff]"> Pull down to refresh</h3>
          }
          releaseToRefreshContent={
            <h3 className="text-center text-[#fff]"> Release to refresh</h3>
          }
        >
          <div className="mt-3">
            {feedsData.map(
              ({ feedId, picture, content, createdOn, feedMetaData, user }) => (
                <FeedCard
                  key={feedId}
                  feedId={feedId}
                  picture={picture}
                  content={content}
                  createdOn={createdOn}
                  username={user.username}
                  firstName={user.firstName}
                  lastName={user.lastName}
                  profilePicture={user.profile.picture}
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

export default MyFeeds;