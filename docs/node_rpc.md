---
id: node_rpc
title: Chainlink Node Setup Guide (LP EaaS)
sidebar_label: Node Setup Guide (LP EaaS)
---

Due to us offering WebSocket RPC's publicly, this allows for the very
easy creation of Chainlink nodes that use our public endpoints. To use
buzzwords, this is a guide on how to set-up a node that connects to our
EaaS platform (Ethereum-as-a-Service).

**Our EaaS service is free, and will always be free.**

## Preconditions

- [Docker](https://docker.com) Installed
  - [Windows Setup Guide](https://docs.docker.com/docker-for-windows/install/)
  - [MacOSX Setup Guide](https://docs.docker.com/docker-for-mac/install/)
  - [Ubuntu Setup Guide](https://docs.docker.com/install/linux/docker-ce/ubuntu/)

**Note:** If you're using Windows 10, we greatly recommend to install
the [Windows Linux Subsystem](https://docs.microsoft.com/en-us/windows/wsl/install-win10).
This subsystem will provide a native Linux terminal in Windows 10.

## Steps

1. Firstly, verify Docker is installed and running:
    ```bash
    docker ps

    CONTAINER ID  IMAGE  COMMAND  CREATED  STATUS  PORTS  NAMES
    ```
    **Windows**: Open your cmd first, and enter `docker ps`.

    Ensure that the result of the command `docker ps` results in the
    following column headers being shown. If you see entries underneath the
    columns, then you've got existing running containers. If you don't
    see the columns and get an error saying Docker isn't running, then
    restart Docker.
2. Create a new folder in your users home.

    - **Windows:** `mkdir C:\Users\<Your Username Here>\.chainlink`
    - **Linux/MacOSX:** `mkdir ~/.chainlink`
3. Create a new file in the folder you just created, name the file
`node.env` and paste the following into it:
    ```bash
    ETH_URL=wss://ropsten-rpc.linkpool.io/ws
    ROOT=/chainlink
    LINK_CONTRACT_ADDRESS=0x20fe562d797a42dcb3399062ae9546cd06f6328
    ETH_CHAIN_ID=3
    LOG_LEVEL=debug
    CHAINLINK_TLS_PORT=0
    CHAINLINK_TLS_HOST=localhost
    ```
4. **(Windows Only)** Add `C:` to your shared drives. Right click on Docker
in the taskbar, click `Settings`. Then browse to `Shared Drives` and
tick the checkbox for `C:` and then click `Apply`.
5. Run the Chainlink node:

    - **Windows:**
        ```bash
        docker run -it ^
            --name chainlink ^
            -p 6688:6688 ^
            -v c:/Users/<Your Username Here>/.chainlink:/chainlink ^
            --env-file=c:/Users/<Your Username Here>/.chainlink/node.env ^
            smartcontract/chainlink:latest local node
        ```
    - **Linux/MacOSX:**
        ```bash
        docker run -it \
        	--name chainlink \
        	-p 6688:6688 \
        	-v ~/.chainlink:/chainlink \
        	--env-file=~/.chainlink/node.env \
        	smartcontract/chainlink:latest local node
        ```
6. Upon running step 5, you should see a Chainlink node booting. Enter
your password for your newly created wallet, and enter your API password
to be set.
7. Once entered, you should see the following lines being shown:
   ```
   2018-11-22T16:18:27Z [INFO]  Connecting to node wss://ropsten-rpc.linkpool.io/ws in 1s services/head_tracker.go:205
   2018-11-22T16:18:28Z [INFO]  Connected to node wss://ropsten-rpc.linkpool.io/ws services/head_tracker.go:214
   ```
8. That's it, you can now browse to `http://localhost:6688` in your
browser and login with the email/password you set as your API credentials
in step 6.

### Notes
To remove/stop your node, press `CTRL + C` to stop it, then enter
`docker rm chainlink` to remove the container.

To run the node in the background, replace `-it` in the command to `-d`.
Although, you need to then pass the passwords for the Wallet/API via
parameters. You can do this by adding `-p <file path> -a <file path>` onto
the command.

### Production Considerations
The configuration specified above for the easy guide is not recommended
to be used in production.

For any nodes that will be used in production, please follow the official
Chainlink guide on [Enabling HTTPS Connections](https://docs.chain.link/docs/enabling-https-connections).
