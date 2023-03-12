import styles from '@/styles/LayoutExperiments.module.css'
import {
    BorderItem,
    BorderLayout,
    Button,
    FlowLayout,
    H2,
    SaltProvider,
    SplitLayout,
    StackLayout,
    Text
} from "@salt-ds/core";
import {MenuIcon, NotificationIcon, SearchIcon} from "@salt-ds/icons";
import {Avatar} from "@salt-ds/lab";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import {useEffect, useState} from "react";
import SingleColumnCard, {SingleColumnItemType} from "@/components/SingleColumnCard";
import {faker} from "@faker-js/faker";

const LeftHeader = () => {

    return (
        <FlowLayout align="center">
            <Link href={'/'}><Image src="/assets/logo.png"
                         alt="Site logo"
                         width={46}
                         height={46} />
            </Link>
            </FlowLayout>
    );
};

const RightHeader = () => {
    return (
        <FlowLayout align="center" gap={1}>
            <Button variant="secondary">
                <SearchIcon/>
            </Button>
            <Button variant="secondary">
                <MenuIcon/>
            </Button>
            <Button variant="secondary">
                <NotificationIcon/>
            </Button>
            <Avatar size="medium">F C</Avatar>
        </FlowLayout>
    );
};

export default function SingleColumn() {
    const [blogPostData, setData] = useState([]);

    const generateData = () => {
        const fakeData: SingleColumnItemType[] = [];
        Array.from(Array(24)).map((_, i) => {
            // random data from faker
            fakeData.push({
                title: faker.music.songName(),
                theme: faker.music.genre(),
                date: faker.date.past().toDateString(),
                img: faker.random.numeric(),
                imgAlt: faker.random.words(3),
                snippet: faker.lorem.lines(),
            });
        });

        // @ts-ignore
        setData(fakeData);
    };

    useEffect(() => {
        generateData();
    }, []);

    return (
        <SaltProvider>
            <BorderLayout className={styles.fullPage}>
                <BorderItem position="north" sticky>
                    <SplitLayout
                        className={styles.header}
                        startItem={<LeftHeader/>}
                        endItem={<RightHeader/>}
                    ></SplitLayout>
                </BorderItem>
                <BorderItem position="center" className={styles.mainContent}>
                    <StackLayout className={clsx("content-box", styles.singleColumn)} align="center">
                        <H2>Single Column Application</H2>
                        <Text>
                            Single column applications are designed to have all content and functionality presented in a
                            single vertical column, making it easy for users to navigate the app without the need for
                            excessive scrolling or navigating through menus. This layout is often used for mobile
                            applications due to the limited screen size of mobile devices.</Text>
                        <Text>Single column layouts are
                            advantageous for content-heavy websites or applications, as they allow for a linear
                            presentation of information that is easy to follow and consume. They also prioritize
                            simplicity and ease of use and can be effective for responsive design, adapting to different
                            screen sizes and orientations, ensuring a consistent user experience across devices.
                        </Text>
                        <Text>
                            To achieve a single column layout using StackLayout from @salt-ds, you can use the
                            StackLayout component with a vertical direction. The StackLayout component is a part of the
                            Salt Design System and allows for the creation of flexible and responsive layouts in React
                            applications.
                        </Text>
                        {blogPostData.map((itemProps, index) => (
                            <SingleColumnCard key={index} {...itemProps} />
                        ))}
                    </StackLayout>
                </BorderItem>
                <BorderItem position="south" sticky>
                    <div className={styles.footer}>
                        <p>Single Column application built with Salt.</p>
                    </div>
                </BorderItem>
            </BorderLayout>
        </SaltProvider>
    )
}
