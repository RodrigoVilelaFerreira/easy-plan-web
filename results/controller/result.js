//Campos para exibir informações
//WhoAreCard
const businessNameValue = document.querySelector('#business-name-value');
const entrepreneurNameValue = document.querySelector('#entrepreneur-name-value');
const businessDocumentValue = document.querySelector('#business-document-value');
const businessDescriptionValue = document.querySelector('#business-description-value');
const businessSegmentValue = document.querySelector('#business-segment-value');

//MarketAnalysisCard
const customerValue = document.querySelector('#customer-value');
const competitorValue = document.querySelector('#competitor-value');
const supplierValue = document.querySelector('#supplier-value');

//MarketingPlanCArd
const productValue = document.querySelector('#product-value');
const businessDifferentialValue = document.querySelector('#business-differential-value');
const mainAdvertisingValue = document.querySelector('#main-advertising-value');
const averageUnitPriceValue = document.querySelector('#average-unit-price-value');
const salesValue = document.querySelector('#sales-value');

//FinancialAnalysisCard
const initialFundingValue = document.querySelector('#initial-funding-value');
const averageUnitCostValue = document.querySelector('#average-unit-cost-value');
const collaboratorCostValue = document.querySelector('#collaborator-cost-value');
const rentCostValue = document.querySelector('#rent-cost-value');
const otherCostValue = document.querySelector('#other-cost-value');

//ResultsReportCard
const invoicingValue = document.querySelector('#invoicing-value');
const costsValue = document.querySelector('#costs-value');
const operationalResultValue = document.querySelector('#operational-result-value');

//Viability-indicators-card
const contributionMarginValue = document.querySelector('#contribution-margin-value');
const balancePointValue = document.querySelector('#balance-point-value');
const profitabilityValue = document.querySelector('#profitability-value');
const returnValue = document.querySelector('#return-value');
const returnPeriodValue = document.querySelector('#return-period-value');

//Pegar objeto armazenado
let allFormData = localStorage.getItem("allData");
let formDatas = JSON.parse(allFormData);

let generalInfoForm = localStorage.getItem("generalInfo");
let generalInfo = JSON.parse(generalInfoForm);

let marketAnalysisForm = localStorage.getItem("marketAnalysis");
let marketAnalysis = JSON.parse(marketAnalysisForm);

let marketingPlanForm = localStorage.getItem("marketingPlan");
let marketingPlan = JSON.parse(marketingPlanForm);

let financialAnalysisForm = localStorage.getItem("financialAnalysis");
let financialAnalysis = JSON.parse(financialAnalysisForm);

//Dados relevantes (usados mais de uma vez)
//MarketingPlanCard
const averageUnitPrice = parseFloat(marketingPlan.averageUnitPrice);
const salesTotal = parseFloat(marketingPlan.salesTotal);

//FinancialAnalysisCard
const initialFunding = parseFloat(financialAnalysis.initialFunding);
const averageUnitCost = parseFloat(financialAnalysis.averageUnitCost);
const collaboratorCost = parseFloat(financialAnalysis.collaboratorCost);
const rentCost = parseFloat(financialAnalysis.rentCost);
const otherCost = parseFloat(financialAnalysis.otherCost);

//Manipular respostas
//MarketAnalysisCard
let customerMessage = `${marketAnalysis.customerDescription}; sendo que eles se encontram em ${marketAnalysis.customerWhere} e ${marketAnalysis.customerFrequency} costumam comprar este tipo de produto/serviço, normalmente levando em consideração ${marketAnalysis.customerFactor}  `

let supplierMessage = ''
if (marketAnalysis.hasSupplier === "Sim") supplierMessage = 'Já possui fornecedores'
if (marketAnalysis.hasSupplier === "Não") supplierMessage = 'Ainda não possui fornecedores'

//MarketingPlanCard
let salesMessage = `Total de R$ ${salesTotal}  ${marketingPlan.salesPeriod}`

//FinancialAnalysisCard
let initialFundingMessage = ''
if (financialAnalysis.hasCapital === 'Sim') initialFundingMessage = `É necessário o investimento de R$ ${initialFunding}, sendo que já possui o investimento necessário`
if (financialAnalysis.hasCapital === 'Não') initialFundingMessage = `É necessário o investimento de R$ ${initialFunding}, sendo que ainda não possui o investimento necessário e provavelmente irá ${financialAnalysis.fundingWay} para obter`

//ResultsReportCard
const invoicingCalculate = averageUnitPrice * salesTotal;
const costsCalculate = averageUnitCost + collaboratorCost + rentCost + otherCost;
const operationalResultCalculate = invoicingCalculate + costsCalculate;

//ViabilityIndicatorsCard
const contributionMarginCalculate = (invoicingCalculate - costsCalculate) / invoicingCalculate;
const balancePointCalculate = costsCalculate / contributionMarginCalculate;
const profitabilityCalculate = operationalResultCalculate / invoicingCalculate;
const returnCalculate = (operationalResultCalculate / initialFunding) * 100;
const returnPeriodCalculate = initialFunding / operationalResultCalculate;


//Exibir informações para o usuário
//WhoAreCard
businessNameValue.innerHTML = generalInfo.businessName;
entrepreneurNameValue.innerHTML = generalInfo.entrepreneurName;
businessDocumentValue.innerHTML = generalInfo.businessDocument;
businessDescriptionValue.innerHTML = generalInfo.businessDescription;
businessSegmentValue.innerHTML = generalInfo.businessSegment;

//MarketAnalysisCard
customerValue.innerHTML = customerMessage;
competitorValue.innerHTML = marketAnalysis.competitorDescription;
supplierValue.innerHTML = supplierMessage;

//MarketingPlanCard
productValue.innerHTML = marketingPlan.productDescription;
businessDifferentialValue.innerHTML = marketingPlan.businessDifferential;
mainAdvertisingValue.innerHTML = marketingPlan.mainAdvertising;
averageUnitPriceValue.innerHTML = `R$ ${averageUnitPrice}`;
salesValue.innerHTML = salesMessage;

//FinancialAnalysisCard
initialFundingValue.innerHTML = initialFundingMessage;
averageUnitCostValue.innerHTML = `R$ ${averageUnitCost}`;
collaboratorCostValue.innerHTML = `R$ ${collaboratorCost}`;
rentCostValue.innerHTML = `R$ ${rentCost}`;
otherCostValue.innerHTML = `R$ ${otherCost}`;

//ResultsReportCard
invoicingValue.innerHTML = parseFloat(invoicingCalculate).toFixed(2);
costsValue.innerHTML = parseFloat(costsCalculate).toFixed(2);
operationalResultValue.innerHTML = parseFloat(operationalResultCalculate).toFixed(2);

//Viability-indicators-card
contributionMarginValue.innerHTML = parseFloat(contributionMarginCalculate).toFixed(2);
balancePointValue.innerHTML = parseFloat(balancePointCalculate).toFixed(2);
profitabilityValue.innerHTML = parseFloat(profitabilityCalculate).toFixed(2);
returnValue.innerHTML = parseFloat(returnCalculate).toFixed(2);
returnPeriodValue.innerHTML = parseFloat(returnPeriodCalculate).toFixed(2);
