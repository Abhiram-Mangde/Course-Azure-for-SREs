resource vnet 'Microsoft.Network/virtualNetworks@2021-05-01' = {
  name: 'CoreVNet'
  location: 'eastus'
  properties: {
    addressSpace: {
      addressPrefixes: [ '10.0.0.0/16' ]
    }
    subnets: [
      {
        name: 'WebSubnet'
        properties: {
          addressPrefix: '10.0.1.0/24'
        }
      },
      {
        name: 'DbSubnet'
        properties: {
          addressPrefix: '10.0.2.0/24'
        }
      }
    ]
  }
}
