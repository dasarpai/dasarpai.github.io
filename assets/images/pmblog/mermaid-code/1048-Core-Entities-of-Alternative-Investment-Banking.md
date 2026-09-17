---
config:
  layout: fixed
---
flowchart TD
 subgraph subGraph0["Investor Side"]
        A1@{ label: "<div style=\"font-size: 20px; font-weight: bold; padding: 12px; width: 200px; word-wrap: break-word; text-align: center; line-height: 1.5;\">Investor<br>(LP / FoF)</div>" }
        A2@{ label: "<div style=\"font-size: 20px; font-weight: bold; padding: 12px; width: 200px; word-wrap: break-word; text-align: center; line-height: 1.5;\">Fund of<br>Funds</div>" }
  end
 subgraph Management["Management"]
        B1@{ label: "<div style=\"font-size: 20px; font-weight: bold; padding: 12px; width: 200px; word-wrap: break-word; text-align: center; line-height: 1.5;\">Adviser /<br>GP</div>" }
        B2@{ label: "<div style=\"font-size: 20px; font-weight: bold; padding: 12px; width: 200px; word-wrap: break-word; text-align: center; line-height: 1.5;\">Sub-Adviser /<br>Portfolio<br>Manager</div>" }
        B3@{ label: "<div style=\"font-size: 20px; font-weight: bold; padding: 12px; width: 200px; word-wrap: break-word; text-align: center; line-height: 1.5;\">Legal<br>Counsel</div>" }
        B4@{ label: "<div style=\"font-size: 20px; font-weight: bold; padding: 12px; width: 200px; word-wrap: break-word; text-align: center; line-height: 1.5;\">Tax<br>Advisor</div>" }
  end
 subgraph subGraph2["Asset Layer"]
        C1@{ label: "<div style=\"font-size: 20px; font-weight: bold; padding: 12px; width: 200px; word-wrap: break-word; text-align: center; line-height: 1.5;\">Security</div>" }
        C2@{ label: "<div style=\"font-size: 20px; font-weight: bold; padding: 12px; width: 200px; word-wrap: break-word; text-align: center; line-height: 1.5;\">Issuer<br>(Company,<br>REIT)</div>" }
  end
 subgraph subGraph3["Market Infrastructure"]
        D1@{ label: "<div style=\"font-size: 20px; font-weight: bold; padding: 12px; width: 200px; word-wrap: break-word; text-align: center; line-height: 1.5;\">Custodian /<br>Bank</div>" }
        D2@{ label: "<div style=\"font-size: 20px; font-weight: bold; padding: 12px; width: 200px; word-wrap: break-word; text-align: center; line-height: 1.5;\">Fund<br>Administrator</div>" }
        D3@{ label: "<div style=\"font-size: 20px; font-weight: bold; padding: 12px; width: 200px; word-wrap: break-word; text-align: center; line-height: 1.5;\">Transfer<br>Agent</div>" }
        D4@{ label: "<div style=\"font-size: 20px; font-weight: bold; padding: 12px; width: 200px; word-wrap: break-word; text-align: center; line-height: 1.5;\">Trustee /<br>Depository</div>" }
        D5@{ label: "<div style=\"font-size: 20px; font-weight: bold; padding: 12px; width: 200px; word-wrap: break-word; text-align: center; line-height: 1.5;\">Prime<br>Broker</div>" }
        D6@{ label: "<div style=\"font-size: 20px; font-weight: bold; padding: 12px; width: 200px; word-wrap: break-word; text-align: center; line-height: 1.5;\">Exchange /<br>OTC Market</div>" }
        D7@{ label: "<div style=\"font-size: 20px; font-weight: bold; padding: 12px; width: 200px; word-wrap: break-word; text-align: center; line-height: 1.5;\">Data<br>Providers</div>" }
        D8@{ label: "<div style=\"font-size: 20px; font-weight: bold; padding: 12px; width: 200px; word-wrap: break-word; text-align: center; line-height: 1.5;\">Rating<br>Agencies</div>" }
  end
 subgraph Oversight["Oversight"]
        E1@{ label: "<div style=\"font-size: 20px; font-weight: bold; padding: 12px; width: 200px; word-wrap: break-word; text-align: center; line-height: 1.5;\">Auditor</div>" }
        E2@{ label: "<div style=\"font-size: 20px; font-weight: bold; padding: 12px; width: 200px; word-wrap: break-word; text-align: center; line-height: 1.5;\">Valuation<br>Agent</div>" }
        E3@{ label: "<div style=\"font-size: 20px; font-weight: bold; padding: 12px; width: 200px; word-wrap: break-word; text-align: center; line-height: 1.5;\">Regulator<br>(SEC, SEBI)</div>" }
        E4@{ label: "<div style=\"font-size: 20px; font-weight: bold; padding: 12px; width: 200px; word-wrap: break-word; text-align: center; line-height: 1.5;\">AML/KYC<br>Compliance</div>" }
  end
    A1 --> B1 & E3
    A2 --> B1
    B1 --> C1 & D1 & D2 & D5 & E3
    B2 --> C1
    C1 --> C2 & D6 & D8 & E2
    D2 --> D3 & D4 & E1 & E3
    D6 --> D7
    D1 --> E1 & E4
    A1@{ shape: rect}
    A2@{ shape: rect}
    B1@{ shape: rect}
    B2@{ shape: rect}
    B3@{ shape: rect}
    B4@{ shape: rect}
    C1@{ shape: rect}
    C2@{ shape: rect}
    D1@{ shape: rect}
    D2@{ shape: rect}
    D3@{ shape: rect}
    D4@{ shape: rect}
    D5@{ shape: rect}
    D6@{ shape: rect}
    D7@{ shape: rect}
    D8@{ shape: rect}
    E1@{ shape: rect}
    E2@{ shape: rect}
    E3@{ shape: rect}
    E4@{ shape: rect}
     A1:::investorStyle
     A2:::investorStyle
     B1:::managementStyle
     B2:::managementStyle
     B3:::managementStyle
     B4:::managementStyle
     C1:::assetStyle
     C2:::assetStyle
     D1:::infraStyle
     D2:::infraStyle
     D3:::infraStyle
     D4:::infraStyle
     D5:::infraStyle
     D6:::infraStyle
     D7:::infraStyle
     D8:::infraStyle
     E1:::oversightStyle
     E2:::oversightStyle
     E3:::oversightStyle
     E4:::oversightStyle
    classDef investorStyle fill:#e1f5fe,stroke:#01579b,stroke-width:5px,color:#000000,min-height:90px
    classDef managementStyle fill:#f3e5f5,stroke:#4a148c,stroke-width:5px,color:#000000,min-height:90px
    classDef assetStyle fill:#e8f5e8,stroke:#1b5e20,stroke-width:5px,color:#000000,min-height:90px
    classDef infraStyle fill:#fff3e0,stroke:#e65100,stroke-width:5px,color:#000000,min-height:90px
    classDef oversightStyle fill:#ffebee,stroke:#b71c1c,stroke-width:5px,color:#000000,min-height:90px
