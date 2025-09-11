import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import video from "../assets/video.mp4";
import { IoPlay, IoPlayCircleSharp } from "react-icons/io5";
import { RiThumbDownFill, RiThumbUpFill } from "react-icons/ri";
import { BsCheck, BsCheckLg } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
export const Card = ({ movieData }) => {
  const [isHovered, setisHovered] = useState(false);
  const [isLiked, setisLiked] = useState(false);
  const nav = useNavigate();
  return (
    <Container
      onMouseEnter={() => setisHovered(true)}
      onMouseLeave={() => setisHovered(false)}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movieData.image}`}
        alt="movie"
      />
      {isHovered && (
        <div className="hover">
          <div className="image-video-container">
            <img
              src={`https://image.tmdb.org/t/p/w500${movieData.image}`}
              alt="movie"
              onClick={() => nav("/player")}
            />

            <video
              src={video}
              autoPlay
              loop
              muted
              onClick={() => nav("/player")}
            />
          </div>
          <div className="info-container flex column">
            <h3 className="name" onClick={() => nav("/player")}>
              {movieData.name}
            </h3>
            <div className="icons flex j-between">
              <div className="controls flex">
                <IoPlayCircleSharp
                  title="play"
                  onClick={() => nav("/player")}
                />
                <RiThumbUpFill title="Like" />
                <RiThumbDownFill title="Dislike" />

                {isLiked ? (
                  <BsCheck title="Remove from List" />
                ) : (
                  <AiOutlinePlus title="Add to my List" />
                )}
              </div>
              <div className="info">
                <BiChevronDown title="More Info" />
              </div>
            </div>
            <div className="genres flex">
              <ul className="flex">
                {movieData.genres.map((genre, idx) => (
                  <li key={genre}>{genre}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
};

const Container = styled.div``;
