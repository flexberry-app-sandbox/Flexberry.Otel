﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Otel
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Отели.
    /// </summary>
    // *** Start programmer edit section *** (Отели CustomAttributes)

    // *** End programmer edit section *** (Отели CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ОтелиE", new string[] {
            "Наименования as \'Наименования\'",
            "Адрес as \'Адрес\'",
            "Звезды as \'Звезды\'"})]
    [View("ОтелиL", new string[] {
            "Наименования as \'Наименования\'",
            "Адрес as \'Адрес\'",
            "Звезды as \'Звезды\'"})]
    public class Отели : ICSSoft.STORMNET.DataObject
    {
        
        private string fНаименования;
        
        private string fАдрес;
        
        private IIS.Otel.Звезда fЗвезды;
        
        // *** Start programmer edit section *** (Отели CustomMembers)

        // *** End programmer edit section *** (Отели CustomMembers)

        
        /// <summary>
        /// Адрес.
        /// </summary>
        // *** Start programmer edit section *** (Отели.Адрес CustomAttributes)

        // *** End programmer edit section *** (Отели.Адрес CustomAttributes)
        [StrLen(255)]
        public virtual string Адрес
        {
            get
            {
                // *** Start programmer edit section *** (Отели.Адрес Get start)

                // *** End programmer edit section *** (Отели.Адрес Get start)
                string result = this.fАдрес;
                // *** Start programmer edit section *** (Отели.Адрес Get end)

                // *** End programmer edit section *** (Отели.Адрес Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Отели.Адрес Set start)

                // *** End programmer edit section *** (Отели.Адрес Set start)
                this.fАдрес = value;
                // *** Start programmer edit section *** (Отели.Адрес Set end)

                // *** End programmer edit section *** (Отели.Адрес Set end)
            }
        }
        
        /// <summary>
        /// Звезды.
        /// </summary>
        // *** Start programmer edit section *** (Отели.Звезды CustomAttributes)

        // *** End programmer edit section *** (Отели.Звезды CustomAttributes)
        public virtual IIS.Otel.Звезда Звезды
        {
            get
            {
                // *** Start programmer edit section *** (Отели.Звезды Get start)

                // *** End programmer edit section *** (Отели.Звезды Get start)
                IIS.Otel.Звезда result = this.fЗвезды;
                // *** Start programmer edit section *** (Отели.Звезды Get end)

                // *** End programmer edit section *** (Отели.Звезды Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Отели.Звезды Set start)

                // *** End programmer edit section *** (Отели.Звезды Set start)
                this.fЗвезды = value;
                // *** Start programmer edit section *** (Отели.Звезды Set end)

                // *** End programmer edit section *** (Отели.Звезды Set end)
            }
        }
        
        /// <summary>
        /// Наименования.
        /// </summary>
        // *** Start programmer edit section *** (Отели.Наименования CustomAttributes)

        // *** End programmer edit section *** (Отели.Наименования CustomAttributes)
        [StrLen(255)]
        public virtual string Наименования
        {
            get
            {
                // *** Start programmer edit section *** (Отели.Наименования Get start)

                // *** End programmer edit section *** (Отели.Наименования Get start)
                string result = this.fНаименования;
                // *** Start programmer edit section *** (Отели.Наименования Get end)

                // *** End programmer edit section *** (Отели.Наименования Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Отели.Наименования Set start)

                // *** End programmer edit section *** (Отели.Наименования Set start)
                this.fНаименования = value;
                // *** Start programmer edit section *** (Отели.Наименования Set end)

                // *** End programmer edit section *** (Отели.Наименования Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ОтелиE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ОтелиE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ОтелиE", typeof(IIS.Otel.Отели));
                }
            }
            
            /// <summary>
            /// "ОтелиL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ОтелиL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ОтелиL", typeof(IIS.Otel.Отели));
                }
            }
        }
    }
}
