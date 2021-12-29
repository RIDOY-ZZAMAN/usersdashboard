import React from 'react';
import Header from './Header/Header';
import LeftColunm from './LeftColunm/LeftColunm';
import RightColumn from './RightColumn/RightColumn';

const Dashboard = () => {
    return (
        <div>
            <Header></Header>
            <div class="">
                <div class="row">
                    <div class="col-lg-2">
                        <LeftColunm></LeftColunm>
                    </div>
                    <div class="col-lg-10 rightColumn">
                        <RightColumn></RightColumn>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;