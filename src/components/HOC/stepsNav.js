import { Steps } from 'antd';
import React, { useState } from 'react';

const { Step } = Steps;

const StepsNav = (props) => {

    const [currentStep, setCurrentStep] = useState(0);

    const changeStep = () => {
        setCurrentStep(currentStep);
    }

    // const { currentStep } = currentStep;
    return (
        <>
            <Steps
                type="navigation"
                size="small"
                current={currentStep}
                onChange={changeStep}
                className="site-navigation-steps"
            >
                <Step
                    key={0}
                    onClick={() => setCurrentStep(0)}
                    title="Step 1"
                    subTitle="00:00:05"
                    status="process"
                    description="This is a description."
                    />
                <Step
                    key={1}
                    onClick={() => setCurrentStep(1)}
                    title="Step 2"
                    subTitle="00:01:02"
                    status="process"
                    description="This is a description."
                    />
                <Step
                    key={2}
                    onClick={() => setCurrentStep(2)}
                    title="Step 3"
                    subTitle="waiting for longlong time"
                    status="process"
                    description="This is a description."
                />
                <Step
                    key={3}
                    onClick={() => setCurrentStep(3)}
                    title="Step 3"
                    subTitle="waiting for longlong time"
                    status="process"
                    description="This is a description."
                />
            </Steps>
        </>
    )
}

export default StepsNav