export const socialNetworkArrayToJSON = (socialNetworkArray) => {
  if (
    socialNetworkArray &&
    Array.isArray(socialNetworkArray) &&
    socialNetworkArray.length > 0
  ) {
    const socialNetworkObject = {};
    socialNetworkArray.map((socialNetwork) => {
      socialNetworkObject[socialNetwork.name] = socialNetwork.account;
    });

    return socialNetworkObject;
  }
  return {};
};

export default { socialNetworkArrayToJSON };
