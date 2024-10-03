const resolvedPromise = () => 
    new Promise((resolve) => 
        setTimeout(() => resolve({ message: 'promise is resolved!' }), 500)
    );

const rejectedPromise = () => 
    new Promise((_, reject) => 
        setTimeout(() => reject('error: promise is rejected!'), 500)
    );

async function executePromises() {
    try {
        const success = await resolvedPromise();
        console.log(success);
    } catch (error) {
        console.error(error);
    }

    try {
        const success = await rejectedPromise();
        console.log(success);
    } catch (error) {
        console.error(error);
    }
}

executePromises();
