import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import {BorderItem, BorderLayout, Button, FlowLayout, SaltProvider, SplitLayout, StackLayout} from "@salt-ds/core";
import {MenuIcon, SearchIcon} from "@salt-ds/icons";
import Image from 'next/image'
import BlogPosts from "@/pages/BlogPosts";
import ProjectCard from "@/components/ProjectCard";
import {CascadingMenu} from "@salt-ds/lab";
import {useMemo} from "react";

const LeftHeader = () => {
    return (
        <FlowLayout align="center">
            <Image src="/assets/logo.png"
                   alt="Site logo"
                   width={46}
                   height={46}/>
        </FlowLayout>
    );
};

const RightHeader = () => {
    const examples = useMemo(() => ({
        menuItems: [{title: "single column"}]}), []);
    return (
        <FlowLayout align="center" gap={1}>
            <Button variant="secondary">
                <SearchIcon/>
            </Button>
                {/*<CascadingMenu*/}
                {/*    initialSource={examples}*/}
                {/*    itemToString={(item) => item?.title}*/}
                {/*    onItemClick={(sourceItem) => {*/}
                {/*        console.log(`You clicked: ${sourceItem.title}`);*/}
                {/*    }}*/}
                {/*>*/}
                    <Button variant="secondary" data-testid="cascading-menu-trigger">
                        <MenuIcon/>
                    </Button>
                {/*</CascadingMenu>*/}
        </FlowLayout>
    );
};

export default function Home() {
    return (
        <SaltProvider>
            <Head>
                <title>Salt layouts</title>
                <meta name="description" content="Layout experiments with salt components"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <BorderLayout className={styles.fullPage}>
                <BorderItem position="north" sticky>
                    <SplitLayout
                        className={styles.header}
                        startItem={<LeftHeader/>}
                        endItem={<RightHeader/>}
                    ></SplitLayout>
                </BorderItem>
                <BorderItem position="center" className={styles.mainContent}>
                    <ProjectCard/>
                    <StackLayout className={styles.mainContainer}>
                        <BlogPosts/>
                    </StackLayout>
                </BorderItem>
                <BorderItem position="south" sticky>
                    <div className={styles.footer}>
                        <p>Blog application built with Salt.</p>
                    </div>
                </BorderItem>
            </BorderLayout>
        </SaltProvider>
    )
}
