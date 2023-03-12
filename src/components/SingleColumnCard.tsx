import { Button, FlexItem, StackLayout, H2, Label } from '@salt-ds/core';
import {
    BookmarkIcon,
    DownloadIcon,
    ShareIcon,
    ThumbsUpIcon,
} from '@salt-ds/icons';
import { SplitLayout } from '@salt-ds/lab';
import styles from '@/styles/BlogPostCard.module.css'
import clsx from "clsx";
import {faker} from "@faker-js/faker";

const LeftSpan = () => (
    <div>
        <Button variant="secondary">
            <ThumbsUpIcon />
        </Button>
        <Button variant="secondary">
            <BookmarkIcon />
        </Button>
        <Button variant="secondary">
            <DownloadIcon />
        </Button>
    </div>
);
export type SingleColumnItemType = {
    title: string,
    theme: string,
    date: string,
    img: string | number,
    imgAlt: string,
    snippet: string,
}
const SingleColumnCard = (props: SingleColumnItemType) => {
    const { theme, title, snippet, img, date} = props;
    return (
        <StackLayout className={clsx(styles.blogItem, "content-box")} align="center">
            <Label>{theme.toUpperCase()}</Label>
            <H2>{title}</H2>
            <p>{`Posted on ${date}`}</p>
            <StackLayout>
                <img src={`https://picsum.photos/750/300?random=${img}`} alt={"placeholder image"}/>
                <p className="text-content">{snippet}</p>
                <FlexItem align="end">
                    <Button>Keep reading</Button>{' '}
                </FlexItem>
            </StackLayout>
            <FlexItem align="stretch">
                <SplitLayout
                    leftSplitItem={<LeftSpan />}
                    rightSplitItem={<ShareIcon />}
                />
            </FlexItem>
        </StackLayout>
    );
};

export default SingleColumnCard;
