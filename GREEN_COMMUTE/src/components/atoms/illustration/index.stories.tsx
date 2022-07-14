import { IllustrationComp, illustrationProps} from "./index";
import { Story } from "@storybook/react";
import Work from '../../assets/image/Work.png';
import Stay from '../../assets/image/Entry-image.png';
import Job from '../../assets/image/Skills.png';

export default{

    title: 'Atom/illustration',
    component: IllustrationComp

};

const Template : Story<illustrationProps> = (args) => <IllustrationComp {...args} />;

export const WorkComp = Template.bind({});
WorkComp.args={
     source: Work
};

export const VectorComp = Template.bind({});
VectorComp.args={
     source: Stay
};

export const JobsComp = Template.bind({});
JobsComp.args={
     source: Job
};