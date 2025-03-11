/**@jsxImportSource @emotion/react */
import * as s from './style';

import React, { useEffect, useRef } from 'react';
import { GrView } from 'react-icons/gr';
import { FcLike } from 'react-icons/fc';

function CategoryBoardListPage(props) {

    const loadMoreRef = useRef(null);

    useEffect(() => {

        const observerCallback = (entries) => {
            console.log(entries);
            const [entry] = entries;
            if (entry.isIntersecting) {
                console.log("다음 페이지 데이터 refetch해줘!");
            }
        }

        const observerOption = {
            threshold: 1.0
        }


        const observer = new IntersectionObserver(observerCallback, observerOption);
        observer.observe(loadMoreRef.current);
    }, [])

    return (
        <div css={s.scrollLayout}>
            <div css={s.cardLayoutGroup}>
                <div css={s.cardLayout}>
                    <header>
                        <div css={s.headerLeft}>
                            <div css={s.profileImgBox}>
                                <img src="" alt="" />
                            </div>
                            <span>nickname</span>
                        </div>

                        <div css={s.boardCounts}>
                            <span>
                                <GrView />
                                <span>{20}</span>
                            </span>
                            <span>
                                <FcLike />
                                <span>{100}</span>
                            </span>
                        </div>
                    </header>
                    <main>
                        <h2 css={s.boardtTitle}>게시글 제목입니다.</h2>
                    </main>
                    
                </div>
                <div css={s.cardLayout}></div>
                <div css={s.cardLayout}></div>
                <div css={s.cardLayout}></div>
                <div css={s.cardLayout}></div>
                <div css={s.cardLayout}></div>
                <div css={s.cardLayout}></div>
            </div>
            <div ref={loadMoreRef}></div>
        </div>
    );
}

export default CategoryBoardListPage;