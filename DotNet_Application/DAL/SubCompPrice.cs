namespace demo1.DAL
{
    public class SubCompPrice
    {
        private object subType;
        private object deltaPrice;
        private object altId;

        public SubCompPrice(object subType, object deltaPrice, object altId)
        {
            this.subType = subType;
            this.deltaPrice = deltaPrice;
            this.altId = altId;
        }

        public string Sub_type { get; set; }
            public double delta_price { get; set; }
            public int alt_id { get; set; }

        public SubCompPrice(string subType, double deltaPrice, int altId)
        {
            Sub_type = subType;
            delta_price = deltaPrice;
            alt_id = altId;
        }
    }

}
