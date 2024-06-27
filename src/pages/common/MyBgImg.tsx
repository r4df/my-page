import React from 'react'
import BgImg from "../common/TopPageBg.jpeg"
import Image from "react-bootstrap/Image";

export default function MyBgImg() {
  return (
    <>
        <Image src={BgImg} className="bg-mytoppage ms-n5"/>
    </>
  )
}
