import {Display3, FlowLayout, Label, StackLayout, Text} from '@salt-ds/core';
import {Avatar} from '@salt-ds/lab';
import styles from '@/styles/ProjectCard.module.css'
import clsx from "clsx";

const ProjectCard = () => {
    return (
        <StackLayout align="center"
            className={clsx(styles.authorCard,"content-box")}
            direction={{xs: 'column', sm: 'row'}}
        >
            <Avatar size="large" className={styles.authorAvatar} src={"/assets/salt.jpg"}/>
            <StackLayout className={styles.authorInfo}>
                <Label>PROJECT</Label>
                <Display3>SALT LAYOUT EXPLORATION</Display3>
                <Text className={styles.textContent}>
                    This website is being built using Salt and Next.js to showcase some implementation experiments. It includes sample applications that utilize the Salt design system and React.</Text>
                <Text className={styles.textContent}>The current versions of Salt being used are:<br/>
                    <FlowLayout gap={1} as="span">
                        <span><strong>salt-ds/core</strong>: 1.2.0,</span>
                        <span><strong>salt-ds/icons</strong>: 1.1.0,</span>
                        <span><strong>salt-ds/theme</strong>: 1.0.0,</span>
                        <span><strong>salt-ds/lab</strong>: 1.0.0-alpha.1.</span>
                    </FlowLayout>
                </Text>
                <Text className={styles.textContent}>
                    If you&apos;re interested in exploring the code and experimenting with the applications, you can find a link to a Stackblitz playground for each project. </Text>
            </StackLayout>
        </StackLayout>
    );
};

export default ProjectCard;
