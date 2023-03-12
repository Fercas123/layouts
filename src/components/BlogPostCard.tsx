import {Button, FlexItem, H2, Label, StackLayout} from '@salt-ds/core';
import {ApiIcon,} from '@salt-ds/icons';
import {SplitLayout} from '@salt-ds/lab';
import styles from '@/styles/BlogPostCard.module.css'
import {useRouter} from 'next/router'
import clsx from "clsx";
import Image from "next/image";

type BlogItemType = {
    theme: string,
    title: string,
    snippet: string,
    img: string,
    date: string,
    stackblitz: string,
    demo?: string
    draft?: boolean
}
const BlogItemCard = ({theme, title, snippet, img, date, stackblitz, demo, draft}: BlogItemType) => {
    const router = useRouter();
    const LeftSplit = () => <Button onClick={() => router.push(`https://stackblitz.com/edit/${stackblitz}`)}
                                    variant={"secondary"}><ApiIcon/> Stackblitz</Button>;
    const RightSplit = () => <Button onClick={() => router.push(demo || '/')}>Visit
        Demo</Button>
    return (
        <StackLayout className={clsx(styles.blogItem,styles.blogRowItem, "content-box", {[styles.draft]: draft})} align="center">
            <Label>{draft? 'DRAFT' : theme.toUpperCase()}</Label>
            <H2>{title}</H2>
            <p>{draft? 'Demo coming up' : `Posted on ${date}`}</p>
            <StackLayout>
                <Image src={!draft? `/assets/${img}.png` : `https://picsum.photos/750/300?random=${img}`} alt={`${title} app screenshot`}/>
                <p className="text-content">{snippet}</p>
            </StackLayout>
            <FlexItem align="stretch">
                <SplitLayout
                    leftSplitItem={<LeftSplit/>}
                    rightSplitItem={demo ? <RightSplit/> : '' }
                />
            </FlexItem>
        </StackLayout>
    );
};

export default BlogItemCard;
