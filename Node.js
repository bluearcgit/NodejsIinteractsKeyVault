const { ClientSecretCredential } = require("@azure/identity");
const { SecretClient } = require("@azure/keyvault-secrets");

const keyVaultName = "<Your Key Vault Name>";
const keyVaultUri = `https://${keyVaultName}.vault.azure.net`;

const tenantId = "<Your Tenant ID>";
const clientId = "<Your Client ID>";
const clientSecret = "<Your Client Secret>";

async function getSecret() {
   const credential = new ClientSecretCredential(tenantId, clientId, clientSecret);
   const secretClient = new SecretClient(keyVaultUri, credential);

   const secretName = "<Your Secret Name>";
   const secret = await secretClient.getSecret(secretName);

   console.log(`Secret: ${secret.value}`);
}

getSecret().catch((err) => {
   console.error("Error getting secret:", err);
});