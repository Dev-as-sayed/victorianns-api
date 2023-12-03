import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useGetContests from '../../Hooks/useGetContests/useGetContests';
import LIstSection from '../../Components/LIstSection/LIstSection';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const AllContest = () => {
    const catagoris = ['physics', 'chemistry', 'math', 'writing', 'spots', 'offers'];
    const { categories } = useParams();
    const initialIndex = catagoris.indexOf(categories);
    const [tabIndex, setTabIndex] = useState(initialIndex);

    const [ contest ] = useGetContests();

    const physics = contest.filter( items => items.categories === 'physics');
    const chemistry = contest.filter( items => items.categories === 'chemistry');
    const math = contest.filter( items => items.categories === 'math');
    const writing = contest.filter( items => items.categories === 'writing');
    const spots = contest.filter( items => items.categories === 'spots');
    const offerd = contest.filter( items => items.categories === 'offerd');

    return (
        <div>
            <div className='w-fit px-12 py-10 mx-auto pt-24 text-center'>
                <h1 className='text-3xl font-semibold'>Explore Exciting Contests</h1>
                <p className=''>Unleash Your Talent, Join the Competitions</p>
            </div>
            <div>
                <Tabs defaultIndex={tabIndex} onSelect={ (index) => setTabIndex(index)}>
                    <TabList className="text-center">
                        <Tab>PHYSICS</Tab>
                        <Tab>CHEMISTRY</Tab>
                        <Tab>MATH</Tab>
                        <Tab>WRITING</Tab>
                        <Tab>SPOTS</Tab>
                        <Tab>OFFERS</Tab>
                    </TabList>

                    <TabPanel>
                        <LIstSection contestItems={physics}></LIstSection>
                    </TabPanel>
                    <TabPanel>
                        <LIstSection contestItems={chemistry}></LIstSection>
                    </TabPanel>
                    <TabPanel>
                        <LIstSection contestItems={math}></LIstSection>
                    </TabPanel>
                    <TabPanel>
                        <LIstSection contestItems={writing}></LIstSection>
                    </TabPanel>
                    <TabPanel>
                        <LIstSection contestItems={spots}></LIstSection>
                    </TabPanel>
                    <TabPanel>
                        <LIstSection contestItems={offerd}></LIstSection>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default AllContest;