export declare const useSupplierForm: () => {
    formData: any;
    discrepancy: {
        businessInformation: {
            legalBusinessName: string;
            tradeNameOrBrandName: string;
            businessType: string;
            yearEstablished: string;
            countryOfRegistration: string;
            postalCode: string;
            stateOrProvince: string;
            city: string;
            companyWebsite: string;
            registeredBusinessAddress: string;
            operationalOrWarehouseAddress: string;
            uploads: {
                businessRegistrationCertificate: string;
                companyProfileOrCatalog: string;
            };
        };
        authorizedContactPerson: {
            fullName: string;
            designation: string;
            mobileNumber: string;
            emailAddress: string;
            whatsAppNumber: string;
            preferredCommunicationMethod: string;
            secondaryContact: {
                name: string;
                designation: string;
                phone: string;
                email: string;
            };
        };
        taxAndLegalCompliance: {
            indiaSupplierFields: {
                panNumber: string;
                hasGstNumber: string;
                gstin: string;
                iec: string;
                msmeOrUdyamRegistrationNumber: string;
            };
            internationalSupplierFields: {
                taxIdentificationOrVatNumber: string;
                exportLicenseNumber: string;
                customsRegistrationNumber: string;
            };
            complianceDeclarations: {
                isRegisteredAndOperational: string;
                agreesToPolicies: string;
                confirmsAuthentic: string;
                confirmsLaborLaws: string;
            };
            uploads: {
                panCopy: string;
                gstCertificate: string;
                noGstSelfDeclaration: string;
                iecCertificate: string;
                taxRegistrationCertificate: string;
                authorizedSignatoryIdProof: string;
            };
        };
        bankingAndPaymentDetails: {
            bankAccountHolderName: string;
            bankName: string;
            accountNumber: string;
            ifscOrSwiftCode: string;
            branchName: string;
            currencyAccepted: string;
            beneficiaryAddress: string;
            paymentTermsPreferred: string;
            uploads: {
                cancelledChequeOrBankProof: string;
            };
        };
        productInformation: {
            productCategoriesSupplied: string;
            mainProductSpecialization: string;
            manufacturingCapacityPerMonth: string;
            minimumOrderQuantity: string;
            averageProductionLeadTime: string;
            readyStockAvailable: string;
            whiteLabelOrPrivateLabelSupport: string;
            oemOrOdmCapability: string;
            productsRequireCertifications: string;
            certificationsAvailable: string;
            uploads: {
                productCatalog: string;
                certificationDocuments: string;
                priceList: string;
            };
        };
        logisticsAndFulfillmentInformation: {
            warehousePickupAddress: string;
            dispatchCity: string;
            dispatchCountry: string;
            typicalDispatchTimeline: string;
            shippingModesSupported: string;
            operationalCapabilities: string;
            preferredLogisticsPartners: string;
            incotermsSupported: string;
        };
        commercialTerms: {
            returnOrReplacementPolicyAcceptance: string;
            agreementToOnamodaSupplierTerms: string;
            pricingValidityPeriod: string;
            preferredBusinessModel: string;
            creditFacilityOffered: string;
            exclusivePartnershipInterest: string;
            marketplaceExperience: string;
        };
        digitalOperationsReadiness: {
            inventoryUpdateMethod: string;
            erpSystemUsed: string;
            productFeedCapability: string;
            dedicatedAccountManagerAvailable: string;
        };
        finalDeclarationAndConsent: {
            mandatoryCheckboxes: {
                certifyAccurate: string;
                authorizeVerification: string;
                complyWithPolicies: string;
                understandNoGuarantee: string;
                consentToStorage: string;
            };
            authorizedSignatoryName: string;
            designation: string;
            digitalOrTypedSignature: string;
            date: string;
        };
    };
    isLocked: import('vue').Ref<boolean, boolean>;
    clearDraft: () => void;
};
