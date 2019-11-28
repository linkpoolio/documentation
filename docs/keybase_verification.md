---
id: keybase_verification
title: Keybase Verification
sidebar_label: Keybase Verification
---

Keybase integration provides a way to socially identify users and node operators listed on the Market. This mechanism will protect and give visibility to contract creators to whether the node that they’re using is operated by who they say they are.

If you have a Team account in the Market, the Team admin must complete the Keybase verification. Link your Keybase and Market accounts:

## Create Keybase Account
To start, create an account at [keybase.io](http://keybase.io) using either their mobile or desktop application. The Keybase username you select does not have to match your handle or name on the Market.

## Add Social Identities
To prove your identity in Keybase, view/edit your profile and select `Add More Identities` from your social media accounts and websites.

## Associating Keybase & Market
There are two ways that you can prove your Market identity with Keybase.

### Keybase App
If you have a Team account in the Market, the Team admin must complete the verification.
- Link your Market account in the Keybase app in the same way social media accounts are verified. Edit your profile, select `Add More Identities`, and search for `market.link`.
- You'll be prompted to enter your handle on the Market. If you have a Team in the Market, you should enter your Team handle, otherwise enter your user handle.
- Next you will be redirected to the market.link domain, and once logged in, you will be able to authorize Keybase, linking your identity.

### Command Line
If you've installed the desktop Keybase client, you can manage your identities from the command line.

- Run the following command:

        keybase prove market.link

- You'll be prompted to enter your handle on the Market. If you have a Team in the Market, you should enter your Team handle, otherwise enter your user handle.
- Copy the generated link to your browser, and once logged in, you will be able to authorize Keybase, linking your identities.

## Changing an Identity
Updating the Market handle that is associated to Keybase can be done in the UI or the command line.

### Keybase App
- Click to view/edit your profile, find the market.link identity and select `revoke`.
- Repeat the process above for verifying a new Market handle.

### Command Line
- Repeat the process above to overwrite your existing Keybase verification by running:

        keybase prove market.link

- When prompted to overwrite your existing proof, select `y` and repeat the process above to verify a new Market handle.
