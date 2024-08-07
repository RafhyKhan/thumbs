import '../App.js';
import React, { useState, useEffect, useContext } from "react";

import TitleBar from '../components/TitleBar.js';
import CardList from '../components/CardList.js';
import Box from '@mui/material/Box';

import { UserContext } from '../helpers/userContext';

import { getMediaList, updateMediaList, getWatchList, updateWatchList } from '../helpers/database.js'

function MainPage() {

  const { user } = useContext(UserContext);
  const [mediaList, setMediaList] = useState() // TODO: consider a context for this variable
  const [watchList, setWatchList] = useState();

  useEffect(()=> {
    user && getMediaList(user).then(res => setMediaList(res ? res : []))
    user && getWatchList(user).then(res => setWatchList(res ? res : []))
  }, [user])

  useEffect(()=>{
    updateMediaList(user, mediaList)
  }, [user, mediaList])

  useEffect(()=>{
      updateWatchList(user, watchList)
  }, [user, watchList])

  return (
      <Box sx={{ display: 'flex', flexDirection: 'column', height:"100vh" }}>
        <TitleBar  />
        <Box sx={{ flex: 1, backgroundImage:"url('rollinghills.gif')" }}>
          <CardList mediaList={mediaList} setMediaList={setMediaList} watchList={watchList} setWatchList={setWatchList} />
        </Box>
      </Box>
  );
}

export default MainPage;