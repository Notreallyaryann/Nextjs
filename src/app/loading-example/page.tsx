async function getData() {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return {
        stats: {
            users: 10000,
        },
    };
}

async function LoadingExample() {
    const data = await getData();

    return (
        <div>
            <h1>Loading Example</h1>
            <p>{data.stats.users}</p>
        </div>
    );
}

export default LoadingExample;

