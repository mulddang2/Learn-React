/* eslint-disable react/prop-types */
import './App.css';

export function HeadTitle({ children, title }) {
  return (
    <div className='head-title'>
      <div className='head-contents'>
        <h2 className='main-title'>{title}</h2>
        {children}
      </div>
    </div>
  );
}

export default function Head() {
  return (
    <>
      <HeadTitle title='MD의 추천'></HeadTitle>
      <HeadTitle title='💥반값이상 초특가 세일💥'>
        <p className='head-subtitle'>
          할인율 50% 이상 뷰티템으로 알뜰하게 담아가세요
        </p>
      </HeadTitle>
      <HeadTitle title='달콤향긋한 베이커리 홈카페🥐'></HeadTitle>
    </>
  );
}
