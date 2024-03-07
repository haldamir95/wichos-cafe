This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Creation steps
1. Install nvm [instalation](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating)
2. [Install](https://npm.github.io/installation-setup-docs/installing/using-a-node-version-manager.html) node using nvm, in this case we use node 20
3. [Install](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable) yarn 
4. create the project with [NextUI](https://nextui.org/docs/frameworks/nextjs) already installed
    ```bash
    yarn create next-app -e https://github.com/nextui-org/next-app-template --typescript
    ```
5. answers:
    - What is your project named? --> wichos-cafe
6. Install React-Redux to use useSelector and useDispatch
    ```
    yarn add react-redux redux
    yarn add @reduxjs/toolkit

    ```
7. Install and configure [PubNub](https://www.pubnub.com/blog/how-to-build-a-next-js-real-time-chat-application/) - [Another tuto](https://app.dashcam.io/replay/64ee0d2ca4bc310061f566ca?share=8YQoHC40jdzYpYGpcJhQ)
    ```
    yarn add pubnub pubnub-react
    yarn add @types/pubnub@^7.0.0
    ```
    - configure your .env file (NEXT_PUBLIC_ is mandatory before your variable name)
    - add your pubnub.js file
    - issues when build? [Possible solution](https://github.com/pubnub/javascript/issues/352) change next.config.js



## Getting Started

1. run the development server:
    ```bash
    yarn dev
    ```
    - You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file. 
2. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
    

## Dockerize
0. Installing docker
    - set up the `apt` repository [like this](https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository)
    - install the latest version
        ```bash
        sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
        ```
    - check if docker engine is working
        ```bash
        sudo docker run hello-world
        ```
    - create a group in linux to don't have to use `sudo` everytime. Follow the [post-instalation steps](https://docs.docker.com/engine/install/linux-postinstall/)
    
1. Create the image building the container
    ```bash
    docker build -t wichos-cafe .
    ```
    (-t = --tag -> allows set a name to the image)
    - Solving Problems 
        -   if actions for run 'yarn run build' does not work, remove the 'if - fi' statement and leave just 'yarn run build;
            ```bash
            # RUN \
            #   if [ -f yarn.lock ]; then yarn run build; \
            #   elif [ -f package-lock.json ]; then npm run build; \
            #   elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm run build; \
            #   else echo "Lockfile not found." && exit 1; \
            #   fi

            RUN yarn run build
            ```
        - to avoid problems when deployed, add the following code to the next.config.js file
            ```
            ...
            const nextConfig = {
                    output: "standalone"
            }
            ...
            ```
        - if there is a type error just ignore it by using the following code above the line that has the error
            ```
            // @ts-ignore
            ```
        - remove the 'themecolor' from the /app/layout.tsx:metadata object and add it to a new viewport object
            ```
            export const viewport: Viewport = {
                themeColor: [
                    { media: "(prefers-color-scheme: light)", color: "white" },
                    { media: "(prefers-color-scheme: dark)", color: "black" },
                ]
            }
            ```

2. check if the image exist
    ```bash
    docker images
    ```
3. run your container
    ```bash
    docker run -d -p 3000:3000 wichos-cafe
    ```
    NOTAS: -d es para correr el contenedor en 2do plano, quitar el -d para acceder a la consola de la app
    -p = --port => is for mapp the port of the app with the port of the localhost
4. check the containers
    ```bash
    docker ps -a
    ```
5. stop container
    ```bash
    docker stop <container_id>
    ```
6. delete containers
    ```bash
    docker rm <container_id>
    ```
7. delete images
    ```bash
    docker rmi <image_id>
    ```



## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
