import React, { useState } from 'react'; 
import Images from './Images';
import { ReactComponent as IconNext } from './images/icon-next.svg';
import { ReactComponent as IconPrev } from './images/icon-previous.svg';
import { ReactComponent as IconClose } from './images/icon-close.svg';

function ProductPreview({ setPreview, image }){
    const [ previewImg, setPreviewImg ] = useState(image);

    const previewState = () => {
        if (previewImg === 1) {
          return Images.product1;
        } else if (previewImg === 2) {
          return Images.product2;
        } else if (previewImg === 3) {
          return Images.product3;
        } else if (previewImg === 4) {
          return Images.product4;
        }
    }

    const Next = () => {
      if(previewImg !== 4){
        setPreviewImg(previewImg + 1);
      }
    }

    const Prev = () => {
      if(previewImg !== 1){
        setPreviewImg(previewImg - 1);
      }
    }

    return (
        <div className="preview-image">
        <div className="preview-background"></div>
        <div className="preview-block">
          <div className="cross-wrapper">
            <IconClose onClick={() => setPreview(false)} viewBox="0 0 14 14"  width="20" height="20" /> 
          </div>
          <div className="product-preview">
            <div className="produc-image-wrapper">
              <div className="big-img-wrapper">
                <div className="previous-wrapper" onClick={Prev}>
                  <IconPrev />
                </div>
                <img className="product1 margb40" src={previewState()} alt="product"></img>
                <div className="next-wrapper" onClick={Next}>
                  <IconNext />
                </div>
              </div>
                <div className="product-thumbnail padding50">
                <div className="image-thumb-wrapper">
                    <div className={previewImg === 1 ? "white-background" : "desactivated"} onClick={() => setPreviewImg(1)}></div>
                    <img className="image-thumbnail" src={Images.product1Thumb} alt="product"></img>
                </div>
                <div className="image-thumb-wrapper">
                    <div className={previewImg === 2 ? "white-background" : "desactivated"} onClick={() => setPreviewImg(2)}></div>
                    <img className="image-thumbnail" src={Images.product2Thumb} alt="product"></img>
                </div>
                <div className="image-thumb-wrapper">
                    <div className={previewImg === 3 ? "white-background" : "desactivated"} onClick={() => setPreviewImg(3)}></div>
                    <img className="image-thumbnail" src={Images.product3Thumb} alt="product"></img>
                </div>
                <div className="image-thumb-wrapper">
                    <div className={previewImg === 4 ? "white-background" : "desactivated"} onClick={() => setPreviewImg(4)}></div>
                    <img className="image-thumbnail" src={Images.product4Thumb} alt="product"></img>
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>


    )
}

export default ProductPreview; 

